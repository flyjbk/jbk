;(function () {
    'use strict'

    const selected_articles = [
        {
            "article-title": "조일지 대표 “여성들만 볼 거란 건 편견, 남성회원이 45%죠”",
            "article-from": "경향신문",
            "article-when": "2022-03-04",
            "article-link": "https://www.khan.co.kr/people/people-general/article/202203032141005"
        },
        {
            "article-title": "[독립영화 돌파구②] 극장과 OTT 무너진 경계, 독립영화 설 자리는?",
            "article-from": "데일리안",
            "article-when": "2022-01-28",
            "article-link": "https://www.dailian.co.kr/news/view/1077893/?sc=Naver"
        },
        {
            "article-title": "퍼플레이, 한국사이버성폭력대응센터에 기부",
            "article-from": "이로운넷",
            "article-when": "2022-01-27",
            "article-link": "https://www.eroun.net/news/articleView.html?idxno=27489"
        },
        {
            "article-title": "여성영화 OTT 퍼플레이, 아마존의 선택 받았다",
            "article-from": "노컷뉴스",
            "article-when": "2021-12-13",
            "article-link": "https://www.nocutnews.co.kr/news/5672637"
        }
    ]

    const get = (target) => {
        return document.querySelector(target)
    }
        
    const getAll = (target) => {
        return document.querySelectorAll(target)
    }

    const $index_newsroom_article_list = get('.index-newsroom-article-list')
    
    const getSelectedArticle = () => {
        for(let i = 0; i < selected_articles.length; i++) {
            const $index_newsroom_article_item  = document.createElement('article')
            $index_newsroom_article_item.classList.add('index-newsroom-article-item')
            $index_newsroom_article_item.innerHTML = 
                    `<a href="${selected_articles[i]["article-link"]}" target="_blank">
                        <div class="article-info">
                            <p class="article-title">${selected_articles[i]["article-title"]}</p>
                            <div class="article-from-n-when">
                                <span class="article-from">${selected_articles[i]["article-from"]}</span>
                                <span class="and-bar"></span>
                                <span class="article-when">${selected_articles[i]["article-when"]}</span> 
                            </div>
                        </div>
                        <div class="btn-article-detail"></div>
                    </a>`
            $index_newsroom_article_list.appendChild($index_newsroom_article_item)
        }
    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', () => {
            getSelectedArticle()
        })
    }

    init()
}) ()