;(function () {
    'use strict'

    const tags = [
        '여성예술가',
        '페미니즘',
        '연대',
        '딸들의세계',
        '퀴어',
        '노동',
        '성장',
        '생존',
        '청년',
        '계급',
        '자매',
        '위안부',
        '디아스포라',
        '1인가구',
        '가부장제',
        '시선',
        '이주여성',
        '기지촌',
        '해방',
        '비건',
        '자유',
        '차별',
        '임신중단'
    ]

    const get = (target) => {
        return document.querySelector(target)
    }
        
    const getAll = (target) => {
        return document.querySelectorAll(target)
    }

    const $tag_1 = get('.tag-1-text')
    const $tag_2 = get('.tag-2-text')
    const $tag_3 = get('.tag-3-text')


    const showRandomThreeTags = () => {
        let randomThreeTags = new Array(3)
        let numberCheckArray = new Array(tags.length)
        for(let i = 0; i < tags.length; i++) {
            numberCheckArray[i] = false
        }
        for(let i = 0; i < 3; i++) {
            while ( true ) {
                let randomNumberTemp = Math.floor(Math.random() * tags.length)
                if(numberCheckArray[randomNumberTemp] === false) {
                    numberCheckArray[randomNumberTemp] = true
                    randomThreeTags[i] = tags[randomNumberTemp]
                    break
                } else {
                    continue
                }
            }
        }
        
        $tag_1.textContent = '#' + randomThreeTags[0]
        $tag_2.textContent = '#' + randomThreeTags[1]
        $tag_3.textContent = '#' + randomThreeTags[2]
    }

    const init = () => {        
        window.addEventListener('DOMContentLoaded', () => {
            showRandomThreeTags()
        })
    }

    init()

})()