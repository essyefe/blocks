function enterSearch() {
    window.document.addEventListener('keydown', function (z) {

        const $blockquery = window.document.querySelector('#blockquery');
        const miniquery = $blockquery.value.toLowerCase();

        const nameblocks = window.document.querySelectorAll('a');

        if (z.key === 'Enter') {
            console.log('Apertou Enter');

            for (const nameblock of nameblocks) {
                if (nameblock.textContent.includes(miniquery)) {
                    nameblock.scrollIntoView({ behavior: 'smooth' });
                    console.log('Sucesso');
                    break;
                }
            }
        }
    });
}