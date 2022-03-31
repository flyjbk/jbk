;(function () {
    'use strict'

    const selected_articles = [
        {
            "article-title": "",
            "article-from": "",
            "article-when": "",
            "article-link": ""
        },
        {
            "article-title": "",
            "article-from": "",
            "article-when": "",
            "article-link": ""
        },
        {
            "article-title": "",
            "article-from": "",
            "article-when": "",
            "article-link": ""
        },
        {
            "article-title": "",
            "article-from": "",
            "article-when": "",
            "article-link": ""
        }
    ]

    const get = (target) => {
        return document.querySelector(target)
    }
        
    const getAll = (target) => {
        return document.querySelectorAll(target)
    }

    const $index_newsroom_article_list = get('.index-newsroom-article-list')
    
}) ()