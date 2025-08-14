        // Seleciona os elementos do DOM
        const themeToggleBtn = document.getElementById('theme-toggle');
        const body = document.body;

        // Função para aplicar o tema com base na preferência salva
        function applyTheme(theme) {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeToggleBtn.textContent = 'Modo Claro';
            } else {
                body.classList.remove('dark-mode');
                themeToggleBtn.textContent = 'Modo Escuro';
            }
        }

        // Verifica a preferência do usuário no localStorage ao carregar a página
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'light';
            applyTheme(savedTheme);
        });

        // Adiciona o evento de clique ao botão
        themeToggleBtn.addEventListener('click', () => {
            // Verifica se o modo escuro está ativo
            const isDarkMode = body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                // Se estiver, muda para o modo claro
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                // Se não, muda para o modo escuro
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });