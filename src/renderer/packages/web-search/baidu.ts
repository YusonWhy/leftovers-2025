import WebSearch, { SearchResult } from './base'

export class BaiduSearch extends WebSearch {
  async search(query: string, signal?: AbortSignal): Promise<SearchResult> {
    const html = await this.fetchSerp(query, signal)
    const items = this.extractItems(html)
    return { items }
  }

  private async fetchSerp(query: string, signal?: AbortSignal) {
    const html = await this.fetch('https://www.baidu.com/s', {
      method: 'GET',
      query: { wd: query },
      signal,
    })
    return html as string
  }

  private extractItems(html: string) {
    const dom = new DOMParser().parseFromString(html, 'text/html')
    const nodes = dom.querySelectorAll('.result.c-container')
    return Array.from(nodes)
      .slice(0, 10)
      .map((node) => {
        const nodeA = node.querySelector('h3.t a')!
        const link = nodeA.getAttribute('href')!
        const title = nodeA.textContent || ''
        const nodeAbstract = node.querySelector('.c-abstract')
        const snippet = nodeAbstract?.textContent || ''
        return { title, link, snippet }
      })
  }
}