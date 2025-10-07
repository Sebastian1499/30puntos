const $ = (s) => document.querySelector(s);

// UI Message Handler
function uiMessage(type, text, details) {
    const el = $("#result");
    el.className = "result " + type;
    const list = details && details.length
        ? "<ul>" + details.map(d => `<li><strong>${d.field || "campo"}:</strong> ${d.message}</li>`).join("") + "</ul>"
        : "";
    el.innerHTML = `<p>${text}</p>${list}`;
}

// Form Data Handler
function getFormData(form) {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
}

// Client Validation
function validateClient({ name, email, age, password, confirmPassword }) {
    const errors = [];

    const nameStr = String(name || "").trim();
    if (nameStr.length < 2) errors.push({ field: "name", message: "Nombre demasiado corto." });

    const emailStr = String(email || "").trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;   // ejemplo@dominio.tld
    if (!emailRe.test(emailStr)) {
        errors.push({ field: "email", message: "Email inválido." });
    }

    const n = Number(String(age || "").trim());
    if (!Number.isInteger(n) || n < 18 || n > 120) {
        errors.push({ field: "age", message: "Edad fuera de rango (18–120)." });
    }

    const pass = String(password || "");
    const pass2 = String(confirmPassword || "");
    if (pass.length < 8) errors.push({ field: "password", message: "Contraseña mínima 8 caracteres." });
    if (pass !== pass2) errors.push({ field: "confirmPassword", message: "Las contraseñas no coinciden." });

    return errors;
}

// Mock Backend
async function mockRegister(payload) {
    await new Promise(r => setTimeout(r, 300));
    const errs = validateClient(payload);
    if (errs.length) {
        return { ok: false, status: 400, body: { status: 400, message: "Datos inválidos.", errors: errs } };
    }
    if (String(payload.email).trim().toLowerCase() === "ana@mail.com") {
        return { ok: false, status: 409, body: { status: 409, message: "El email ya está registrado." } };
    }
    if (String(payload.password).toLowerCase().includes(String(payload.name).toLowerCase().trim())) {
        return { ok: false, status: 422, body: { status: 422, message: "La contraseña no debe contener tu nombre." } };
    }
    return { ok: true, status: 201, body: { status: 201, message: "Usuario registrado correctamente." } };
}

// Demo Window Handler
function abrirDemo() {
    const html = document.documentElement.outerHTML;
    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
}

// HTTP Status Mock Data
const mockBodies = {
    200: { status: 200, message: "OK" },
    201: { status: 201, message: "Created" },
    400: { status: 400, message: "Bad Request" },
    409: { status: 409, message: "Conflict" },
    422: { status: 422, message: "Unprocessable Entity" },
    500: { status: 500, message: "Internal Server Error" }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    $("#registerForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const payload = getFormData(e.currentTarget);
        const clientErrors = validateClient(payload);
        if (clientErrors.length) {
            uiMessage("error", "Errores en el formulario (cliente).", clientErrors);
            return;
        }
        const res = await mockRegister(payload);
        if (!res.ok) {
            uiMessage("error", `(${res.status}) ${res.body.message}`);
        } else {
            uiMessage("ok", `(${res.status}) ${res.body.message}`);
            e.currentTarget.reset();
        }
    });

    // HTTP Status simulation buttons
    document.querySelectorAll("[data-sim]").forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.getAttribute("data-sim");
            $("#mockOut").textContent = JSON.stringify(mockBodies[code], null, 2);
        });
    });
});