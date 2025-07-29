// 页码组件逻辑
class Pagination {
  constructor(containerId, totalPages = 5) {
    this.container = document.getElementById(containerId);
    this.totalPages = totalPages;
    this.currentPage = 1;
    this.render();
  }

  // 渲染页码
  render() {
    this.container.innerHTML = '';

    // 上一页按钮
    const prevBtn = document.createElement('button');
    prevBtn.innerText = '上一页';
    prevBtn.disabled = this.currentPage === 1;
    prevBtn.onclick = () => this.changePage(this.currentPage - 1);
    this.container.appendChild(prevBtn);

    // 页码数字
    for (let i = 1; i <= this.totalPages; i++) {
      const pageSpan = document.createElement('span');
      pageSpan.innerText = i;
      pageSpan.className = 'page-number';
      if (i === this.currentPage) pageSpan.classList.add('active');
      pageSpan.onclick = () => this.changePage(i);
      this.container.appendChild(pageSpan);
    }

    // 下一页按钮
    const nextBtn = document.createElement('button');
    nextBtn.innerText = '下一页';
    nextBtn.disabled = this.currentPage === this.totalPages;
    nextBtn.onclick = () => this.changePage(this.currentPage + 1);
    this.container.appendChild(nextBtn);
  }

  // 切换页码
  changePage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.render();
    // 这里可以加“页码变化后要执行的逻辑”，比如加载对应页内容
    console.log('当前页码：', page);
  }
}

// 初始化页码（总页数可自己改，比如 new Pagination('pagination', 10) 就是 10 页）
window.onload = () => {
  new Pagination('pagination', 5);
};