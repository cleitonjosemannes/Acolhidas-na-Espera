/**
 * Projeto: Acolhidas na Espera
 * Arquivo: scripts.js
 * Descrição: Responsável por interações de UI do usuário (Menu Sanduíche e Validação de Form)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle (Sanduíche)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Animação simples nas barras do botão sanduíche
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = mainNav.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            bars[1].style.opacity = mainNav.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = mainNav.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
        });

        // Fecha o menu ao clicar em qualquer link (Melhor UX)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                // Reseta as barras do menu
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }


});