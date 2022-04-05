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

    const $tag_1 = get('.tag-1')
    const $tag_2 = get('.tag-2')
    const $tag_3 = get('.tag-3')


    const showRandomThreeTags = () => {
        let $tag_1_text = get('.tag-1-text')
        let $tag_2_text = get('.tag-2-text')
        let $tag_3_text = get('.tag-3-text')
        $tag_1.removeChild($tag_1_text)
        $tag_2.removeChild($tag_2_text)
        $tag_3.removeChild($tag_3_text)

        let randomThreeTags = new Array(3)
        let numberCheckArray = new Array(tags.length)

        $tag_1_text = document.createElement('p')
        $tag_1_text.classList.add('tag-1-text')
        $tag_1.appendChild($tag_1_text)
        
        $tag_2_text = document.createElement('p')
        $tag_2_text.classList.add('tag-2-text')
        $tag_2.appendChild($tag_2_text)
        
        $tag_3_text = document.createElement('p')
        $tag_3_text.classList.add('tag-3-text')
        $tag_3.appendChild($tag_3_text)

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
        
        $tag_1_text.textContent = '#' + randomThreeTags[0]
        $tag_2_text.textContent = '#' + randomThreeTags[1]
        $tag_3_text.textContent = '#' + randomThreeTags[2]
    }

    const init = () => {        
        window.addEventListener('DOMContentLoaded', () => {
            showRandomThreeTags()
            setInterval(showRandomThreeTags, 3000)
        })
    }

    init()

})()