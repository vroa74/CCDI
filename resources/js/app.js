import Alpine from 'alpinejs';
import { initFlowbite } from 'flowbite';
import { createIcons } from 'lucide';

window.Alpine = Alpine;

Alpine.start();

window.addEventListener('DOMContentLoaded', () => {
    initFlowbite();
    createIcons({
        attrs: {
            class: 'inline-block',
        },
    });
});