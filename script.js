document.addEventListener("DOMContentLoaded", () => {

    // Função para mostrar o feedback
    function mostrarResultado(elemento, acertou) {
        let feedback = elemento.querySelector(".feedback");
        if (!feedback) {
            feedback = document.createElement("p");
            feedback.classList.add("feedback");
            elemento.appendChild(feedback);
        }

        if (acertou) {
            feedback.textContent = "✅ Correto!";
            feedback.style.color = "limegreen";
        } else {
            feedback.textContent = "❌ Incorreto!";
            feedback.style.color = "red";
        }
    }

    // ---------- Pergunta 1 ----------
    const radios1 = document.querySelectorAll('input[name="resposta1"]');
    radios1.forEach(radio => {
        radio.addEventListener("change", () => {
            const correta = "Japão";
            radios1.forEach(r => {
                const label = document.querySelector(`label[for="${r.id}"]`);
                if (r.value === correta) {
                    label.style.color = "limegreen";
                } else {
                    label.style.color = "";
                }
            });
            mostrarResultado(radio.parentElement, radio.value === correta);
        });
    });

    // ---------- Pergunta 2 ----------
    const input2 = document.querySelector("#resposta2");
    input2.addEventListener("input", () => {
        const corretas = ["maradona", "diego maradona"];
        const resposta = input2.value.trim().toLowerCase();
        const acertou = corretas.includes(resposta);
        input2.style.border = acertou ? "2px solid limegreen" : "2px solid red";
        mostrarResultado(input2.parentElement, acertou);
    });

    // ---------- Pergunta 3 ----------
    const radios3 = document.querySelectorAll('input[name="resposta3"]');
    radios3.forEach(radio => {
        radio.addEventListener("change", () => {
            const correta = "Real Madrid";
            radios3.forEach(r => {
                const label = document.querySelector(`label[for="${r.id}"]`);
                if (r.value === correta) {
                    label.style.color = "limegreen";
                } else {
                    label.style.color = "";
                }
            });
            mostrarResultado(radio.parentElement, radio.value === correta);
        });
    });

    // ---------- Pergunta 4 ----------
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            const cr7 = document.querySelector("#cr7").checked;
            const messi = document.querySelector("#messi").checked;
            const neymar = document.querySelector("#neymar").checked;
            const mbappe = document.querySelector("#mbappe").checked;

            const acertou = cr7 && messi && !neymar && !mbappe;
            checkboxes.forEach(c => {
                const label = document.querySelector(`label[for="${c.id}"]`);
                if ((c.id === "cr7" || c.id === "messi") && acertou) {
                    label.style.color = "limegreen";
                } else {
                    label.style.color = "";
                }
            });
            mostrarResultado(cb.parentElement, acertou);
        });
    });

    // ---------- Pergunta 5 ----------
    const select = document.querySelector("#melhor-select");
    select.addEventListener("change", () => {
        const correta = "Pelé";
        const acertou = select.value === correta;
        select.style.border = acertou ? "2px solid limegreen" : "2px solid red";
        mostrarResultado(select.parentElement, acertou);
    });
});
