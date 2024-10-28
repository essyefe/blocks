
function searchBlock() {

    const $blockquery = window.document.querySelector('#blockquery');
    const miniquery = $blockquery.value.toLowerCase();
    console.log(miniquery);

    const nameblocks = window.document.querySelectorAll('a');

    for (const nameblock of nameblocks) {
        if (nameblock.textContent.includes(miniquery)) {
            nameblock.scrollIntoView({ behavior: 'smooth' });
            console.log('Sucesso');
            break;
        } else {
            console.log('FAIL');
        }
    }

}
