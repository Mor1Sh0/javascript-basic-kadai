const b = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
b.addEventListener('click', () => {
  let t = document.getElementById('text');
  t.textContent = 'ボタンをクリックしました';
});
