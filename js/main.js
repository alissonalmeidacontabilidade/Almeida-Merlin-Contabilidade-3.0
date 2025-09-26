// Script principal - Almeida & Merlin Contabilidade

document.addEventListener('DOMContentLoaded', function() {
    // Navegação fixa no scroll
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Menu mobile toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Alterna o ícone do botão
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Fechar menu ao clicar em um link (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Restaura o ícone do botão
                const icon = mobileNavToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Tabs do Tutorial
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove classe ativa de todos os botões e conteúdos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Adiciona classe ativa ao botão e conteúdo clicado
                this.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }
    
    // Animação de scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Validação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                showError(name, 'Por favor, informe seu nome');
            } else {
                removeError(name);
            }
            
            if (!email.value.trim()) {
                isValid = false;
                showError(email, 'Por favor, informe seu e-mail');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Por favor, informe um e-mail válido');
            } else {
                removeError(email);
            }
            
            if (!message.value.trim()) {
                isValid = false;
                showError(message, 'Por favor, escreva sua mensagem');
            } else {
                removeError(message);
            }
            
            if (isValid) {
                // Simulação de envio (em um site real, isso seria substituído pelo envio real)
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
                
                // Simula um atraso de envio
                setTimeout(function() {
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    
                    // Mostra mensagem de sucesso
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success';
                    successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    successMessage.style.backgroundColor = '#d4edda';
                    successMessage.style.color = '#155724';
                    successMessage.style.padding = '15px';
                    successMessage.style.marginBottom = '20px';
                    successMessage.style.borderRadius = '4px';
                    
                    contactForm.parentNode.insertBefore(successMessage, contactForm);
                    
                    // Remove a mensagem após 5 segundos
                    setTimeout(() => successMessage.remove(), 5000);
                }, 1500);
            }
        });
    }
    
    // Funções auxiliares para validação de formulário
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }
        
        input.style.borderColor = 'red';
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = '';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Inicializa o primeiro tab como ativo
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.click();
    }
    
    // Botão para download do PDF do tutorial
    const downloadButtons = document.querySelectorAll('.download-tutorial');
    if (downloadButtons.length > 0) {
        downloadButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Não previne o comportamento padrão para permitir o download via atributo download
                // e.preventDefault();
                
                // Registra o evento de download (para analytics em um site real)
                console.log('Download do tutorial iniciado');
            });
        });
    }
    
    // Botão de acesso rápido - mostrar/ocultar conforme rolagem
    const quickAccessBtn = document.querySelector('.quick-access');
    if (quickAccessBtn) {
        // Adiciona estilos iniciais via JavaScript
        quickAccessBtn.style.position = 'fixed';
        quickAccessBtn.style.right = '-180px'; // Começa fora da tela
        quickAccessBtn.style.bottom = '100px';
        quickAccessBtn.style.zIndex = '99';
        quickAccessBtn.style.transition = 'right 0.3s ease';
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                quickAccessBtn.style.right = '0';
            } else {
                quickAccessBtn.style.right = '-180px';
            }
        });
        
        // Verifica a posição inicial
        if (window.scrollY > 300) {
            quickAccessBtn.style.right = '0';
        }
    }
    
    // Adicionar animações para elementos com classe animate-fade-in
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    
    if (animatedElements.length > 0) {
        // Configurar estilos iniciais
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // Função para verificar se elementos estão visíveis
        function checkAnimations() {
            const triggerBottom = window.innerHeight * 0.8;
            
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < triggerBottom) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Adicionar listeners
        window.addEventListener('scroll', checkAnimations);
        window.addEventListener('resize', checkAnimations);
        
        // Verificar posição inicial
        checkAnimations();
    }
    
    // Estilizar o botão de área do cliente
    const areaClienteBtn = document.querySelector('.btn-area-cliente');
    if (areaClienteBtn) {
        areaClienteBtn.style.backgroundColor = '#D4B45F';
        areaClienteBtn.style.color = '#0A2A3F';
        areaClienteBtn.style.borderRadius = '4px';
        areaClienteBtn.style.padding = '8px 15px';
    }
    
    // Estilizar o botão de acesso rápido
    const quickAccessButton = document.querySelector('.quick-access-btn');
    if (quickAccessButton) {
        quickAccessButton.style.display = 'flex';
        quickAccessButton.style.alignItems = 'center';
        quickAccessButton.style.backgroundColor = '#0A2A3F';
        quickAccessButton.style.color = '#D4B45F';
        quickAccessButton.style.padding = '10px 15px';
        quickAccessButton.style.borderRadius = '4px 0 0 4px';
        quickAccessButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        const icon = quickAccessButton.querySelector('i');
        if (icon) {
            icon.style.marginRight = '10px';
        }
    }
});
