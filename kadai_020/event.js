const b = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
b.addEventListener('click', () => {
  document.getElementById('text').textContent = 'ボタンをクリックしました';
});
