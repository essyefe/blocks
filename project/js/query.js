// Query in : https://minecraft.fandom.com/pt/wiki/Categoria:Blocos

const $blocks = document.querySelectorAll('.sprite-text');

$blocks.forEach((block) => {
  const blocktext = block.textContent;
  console.log(blocktext);
});