import { get, getAll } from "../utils.js";

;(function () {
  'use strict'

  //로드 가능한 최대 갯수
  const limit = 9
  // 현재 노출된 아이템 갯수
  let total = 0
  // 현재 페이지
  let page = 1
  
  const API_URL = `http://localhost:3000/news`
  let categoryText = '전체'
  let uesrtitle = ''

  const $categoryButton = getAll('.newsroom-category')
  const $searchButton = get('.newsroom-search-icon')
  const $searchArea = get('.newsroom-search-area')
  const $articleWrapper = get('.newsroom-article-wrapper')
  const $btnMoreArticle = get('.btn-more-article')
  const $icon = get('.fa-solid.fa-circle-plus')
  const $searchInput = get('.newsroom-search-input')
  const $searchInputButton = get('.newsroom-search-button')
  
  //버튼색 초기화
  const categoryColor = (item) => {
    const $true = getAll('.newsroom-category.true')
    $true.forEach((clear) => {
      clear.className = 'newsroom-category'
    })
    item.className = 'newsroom-category true'
  }

  //카테고리 버튼
  const categoryButtonSet = () => {
    $categoryButton.forEach((item) => {
      item.addEventListener('click', () => {
        //값 취득
        if (item.textContent !== '전체') {
          categoryText = item.textContent
        } else {
          categoryText = '전체'
        }

        //버튼색
        categoryColor(item)

        //아이템 초기화
        const $articleItemAll = getAll('.newsroom-article-item')
        $articleItemAll.forEach((item) => {
          item.remove()
        })
        total = 0
        page = 1

        loadNews()
      })
    })
  }

  //검색부분 노출 여부
  const searchButtonSet = () => {
    $searchButton.addEventListener('click', () => {
      $searchArea.classList.toggle('hidden')
    })
  }

  //검색
  const search = () => {
    $icon.className += 'hidden'

    if ($searchInput.value.length > 21) {
      alert('50자 이내로 입력해 주세요')
      $searchInput.focus()
    } else {
      uesrtitle = $searchInput.value

      //아이템 초기화
      const $articleItemAll = getAll('.newsroom-article-item')
      $articleItemAll.forEach((item) => {
        item.remove()
      })
      total = 0
      page = 1

      loadNews()
    }
  }

  //검색버튼
  const searchInputButtonSet = () => {
    $searchInput.addEventListener('keyup', search)
    $searchInputButton.addEventListener('click',search)
  }

  //article-item 생성
  const showNews = (news) => {
    news.forEach((item) => {
      const { nid, category, source, title, date, link, img_url } = item
      if (uesrtitle !== '') {
        if (-1 < title.indexOf(uesrtitle)) {
          total++
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
          return
        }
      } else {
        total++
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
    })
    uesrtitle = ''
    moreArticleButton()
  }

  //응답결과 있는지 확인
  const getNews = async () => {
    let CUSTOM_URL = `${API_URL}?_limit=${limit}&_page=${page}`
    
    //카테고리 체크
    if (categoryText !== '전체') {
      CUSTOM_URL = `${API_URL}?category=${categoryText}&_limit=${limit}&_page=${page}`
    }
    
    //검색어 체크
    if (uesrtitle !== '') {
      CUSTOM_URL = API_URL
    }

    const response = await fetch(CUSTOM_URL)
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

  //더보기 버튼 : 아이템 갯수에 따라 노출 조정
  const moreArticleButton = () => {
    if (Number.isInteger(total / limit) && total !== 0) {
      $icon.className = 'fa-solid fa-circle-plus'
    } else {
      $icon.className += 'hidden'
    }
  }

  //더보기 버튼
  const moreArticleButtonSet = () => {
    $btnMoreArticle.addEventListener('click', () => {
      page++
      loadNews()
    })
  }

  //돔 로드가 끝나면 실행
  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      categoryButtonSet()
      searchButtonSet()
      searchInputButtonSet()
      loadNews()
      moreArticleButtonSet()
    })
  }

  init()
})()