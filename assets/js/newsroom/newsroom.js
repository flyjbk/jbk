import { get, getAll } from "../utils.js";

;(function () {
  'use strict'

  let page = 1
  const limit = 9
  const end = 14
  let total = 9
  const API_URL = `http://localhost:3000/news`
  const categoryText = '전체'

  const $categoryButton = getAll('.newsroom-category')
  const $searchButton = get('.newsroom-search-icon')
  const $searchArea = get('.newsroom-search-area')
  const $articleWrapper = get('.newsroom-article-wrapper')
  const $btnMoreArticle = get('.btn-more-article')
  const $icon = get('.fa-circle-plus')
  
  //카테고리 값 취득
  const categoryButtonSet = () => {
    $categoryButton.forEach((item) => {
      item.addEventListener('click', () => {
        console.log(typeof categoryText)
        console.log(typeof item.textContent)
        categoryText = item.textContent
      })
    })
  }

  //검색부분 노출 여부
  const searchButtonSet = () => {
    $searchButton.addEventListener('click', () => {
      $searchArea.classList.toggle('hidden')
    })
  }

  //article-item 생성
  const showNews = (news) => {
    news.forEach((item) => {
      if (categoryText === '전체') {
        const { nid, category, source, title, date, link, img_url } = item
        const $articleItem = document.createElement('a')
        $articleItem.classList.add('newsroom-article-item')
        $articleItem.href = link
        $articleItem.dataset.id = nid
        $articleItem.innerHTML = `
            <img src="${img_url}" alt="뉴스의 대표 이미지" class="article-img">
            <div class="article-info">
                <div class="article-category-n-from">
                    <span class="article-category">${category}</span>
                    <span class="and-bar"></span>
                    <span class="article-from">${source}</span>
                </div>
                <p class="article-title">${title}</p>
                <p class="article-when">${date}</p>
            </div>
          `
        $articleWrapper.appendChild($articleItem)
      } else {
        for (let index = 0; index < category.length; index++) {
          if (categoryText === category) {
            const $articleItem = document.createElement('a')
            $articleItem.classList.add('newsroom-article-item')
            $articleItem.href = link
            $articleItem.dataset.id = nid
            $articleItem.innerHTML = `
                <img src="${img_url}" alt="뉴스의 대표 이미지" class="article-img">
                <div class="article-info">
                    <div class="article-category-n-from">
                        <span class="article-category">${category}</span>
                        <span class="and-bar"></span>
                        <span class="article-from">${source}</span>
                    </div>
                    <p class="article-title">${title}</p>
                    <p class="article-when">${date}</p>
                </div>
              `
            $articleWrapper.appendChild($articleItem)
          }
          index++          
        }
      }  
    })
  }

  //서버에서 news 데이터 받음
  const getNews = async () => {
    const customURL = `${API_URL}?_page=${page}&_limit=${limit}`
    const response = await fetch(customURL)
    if (!response.ok) {
      throw new Error('에러 발생')
    }
    return await response.json()
  }

  //news 렌더링하기
  const loadNews = async () => {
    try {
      const response = await getNews()
      showNews(response)
    } catch (error) {
      console.error(error)
    }
  }

  //더보기 버튼
  const moreArticleButton = () => {
    $btnMoreArticle.addEventListener('click', () => {
        page++
        total += 9
        loadNews()

        if (total === end || total>end) {
          $icon.remove()
          return
        }
    })
  }

  //돔 로드가 끝나면 실행
  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      categoryButtonSet()
      searchButtonSet()
      loadNews()
      moreArticleButton()
    })
  }

  init()
})()