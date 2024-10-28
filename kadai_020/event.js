const b = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
b.addEventListener('click', () => {
  const t = document.getElementById('text');
  t.textContent = 'ボタンをクリックしました';
});
