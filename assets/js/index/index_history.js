;(function () {
    'use strict'
  
    const index_history_db = [
      {
          "year" : 2021,
          "type": ["수상", "인증", "주요활동", "후원"],
          "detail": [
                      {
                          "type": "수상",
                          "content": "[아마존웹서비스코리아] IT분야 여성 사회적경제기업 우수 어워드",
                          "link": ''
                      },
                      {
                          "type": "수상",
                          "content": "[문화체육관광부] 양성평등문화상 양성평등문화지원상 단체부분 장관상",
                          "link": ''
                      },
                      {
                          "type": "인증",
                          "content": "[고용노동부] 사회적기업 기타(창의·혁신)형",
                          "link": ''
                      },
                      {
                          "type": "인증",
                          "content": "[중소벤처기업부] 벤처기업",
                          "link": ''
                      },
                      {
                          "type": "인증",
                          "content": "[중소벤처기업부] 성과공유도입기업",
                          "link": ''
                      },
                      {
                          "type": "인증",
                          "content": "[여성가족부] 가족친화기업",
                          "link": ''
                      },
                      {
                          "type": "주요활동",
                          "content": "온라인극장",
                          "link": "https://purplay.co.kr/off/"
                      },
                      {
                          "type": "후원",
                          "content": "영화 <까만점> (감독 이영음) 수익금 한국사이버성폭력대응센터 기부",
                          "link": ''
                      }
          ]
      },   
      { 
          "year" : 2020,
          "type": [ "인증", "수상", "주요활동", "후원"],
          "detail": [
            {
                "type": "수상",
                "content": "[아마존웹서비스코리아] IT분야 여성 사회적경제기업 우수 어워드",
                "link": ''
            },
            {
                "type": "수상",
                "content": "[문화체육관광부] 양성평등문화상 양성평등문화지원상 단체부분 장관상",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[고용노동부] 사회적기업 기타(창의·혁신)형",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 벤처기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 성과공유도입기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[여성가족부] 가족친화기업",
                "link": ''
            },
            {
                "type": "주요활동",
                "content": "온라인극장",
                "link": "https://purplay.co.kr/off/"
            },
            {
                "type": "후원",
                "content": "영화 <까만점> (감독 이영음) 수익금 한국사이버성폭력대응센터 기부",
                "link": ''
            }
          ]
      },
      { 
          "year" : 2019,
          "type": ["수상", "인증", "후원" , "주요활동"],
          "detail": [
            {
                "type": "수상",
                "content": "[아마존웹서비스코리아] IT분야 여성 사회적경제기업 우수 어워드",
                "link": ''
            },
            {
                "type": "수상",
                "content": "[문화체육관광부] 양성평등문화상 양성평등문화지원상 단체부분 장관상",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[고용노동부] 사회적기업 기타(창의·혁신)형",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 벤처기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 성과공유도입기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[여성가족부] 가족친화기업",
                "link": ''
            },
            {
                "type": "주요활동",
                "content": "온라인극장",
                "link": "https://purplay.co.kr/off/"
            },
            {
                "type": "후원",
                "content": "영화 <까만점> (감독 이영음) 수익금 한국사이버성폭력대응센터 기부",
                "link": ''
            }
          ]
      },
      { 
          "year" : 2018,
          "type": ["수상", "인증", "주요활동", "후원"],
          "detail": [
            {
                "type": "수상",
                "content": "[아마존웹서비스코리아] IT분야 여성 사회적경제기업 우수 어워드",
                "link": ''
            },
            {
                "type": "수상",
                "content": "[문화체육관광부] 양성평등문화상 양성평등문화지원상 단체부분 장관상",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[고용노동부] 사회적기업 기타(창의·혁신)형",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 벤처기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 성과공유도입기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[여성가족부] 가족친화기업",
                "link": ''
            },
            {
                "type": "주요활동",
                "content": "온라인극장",
                "link": "https://purplay.co.kr/off/"
            },
            {
                "type": "후원",
                "content": "영화 <까만점> (감독 이영음) 수익금 한국사이버성폭력대응센터 기부",
                "link": ''
            }
          ]
      },
      { 
          "year" : 2017,
          "type": ["수상", "인증", "주요활동", "후원"],
          "detail": [
            {
                "type": "수상",
                "content": "[아마존웹서비스코리아] IT분야 여성 사회적경제기업 우수 어워드",
                "link": ''
            },
            {
                "type": "수상",
                "content": "[문화체육관광부] 양성평등문화상 양성평등문화지원상 단체부분 장관상",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[고용노동부] 사회적기업 기타(창의·혁신)형",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 벤처기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[중소벤처기업부] 성과공유도입기업",
                "link": ''
            },
            {
                "type": "인증",
                "content": "[여성가족부] 가족친화기업",
                "link": ''
            },
            {
                "type": "주요활동",
                "content": "온라인극장",
                "link": "https://purplay.co.kr/off/"
            },
            {
                "type": "후원",
                "content": "영화 <까만점> (감독 이영음) 수익금 한국사이버성폭력대응센터 기부",
                "link": ''
            }
          ]
      }
    ]
    
    const get = (target) => {
        return document.querySelector(target)
    }
        
    const getAll = (target) => {
        return document.querySelectorAll(target)
    }
    
    const $history_by_year_wrapper = get('.btn-history-by-year-wrapper')
    const $history_of_the_year = get('.history-of-the-year')

    const getBtnHistoryByYear = () => {
        for(let i = 0; i < index_history_db.length; i++) {
            const $btn_history_by_year = document.createElement('button')
            $btn_history_by_year.type = "button"
            if(i === 0) {
                $btn_history_by_year.classList.add('btn-history-by-year', 'true')
            } else {
                $btn_history_by_year.classList.add('btn-history-by-year')
            }
            const btn_year_content = document.createElement('span')
            btn_year_content.textContent = index_history_db[i].year
            $btn_history_by_year.appendChild(btn_year_content)
            $history_by_year_wrapper.appendChild($btn_history_by_year)
        }
    }

    const getHistoryOfTheYear = (index) => {
        while($history_of_the_year.firstChild) {
            $history_of_the_year.removeChild($history_of_the_year.firstChild)
        }
        for(let j = 0; j < index_history_db[index].type.length; j++) {
            const $history_of_the_year_detail_list = document.createElement('ul')
            $history_of_the_year_detail_list.classList.add('history-of-the-year-detail')
            
            const $history_of_the_year_detail_title = document.createElement('p')
            $history_of_the_year_detail_title.textContent = index_history_db[index].type[j]
            $history_of_the_year_detail_list.appendChild($history_of_the_year_detail_title)
            
            for(let k = 0; k < index_history_db[index].detail.length; k++) {
                const $history_of_the_year_detail_item = document.createElement('li')
                const $history_of_the_year_detail_item_content = document.createElement('span')
                if(index_history_db[index].detail[k].type === index_history_db[index].type[j]) {
                    $history_of_the_year_detail_item_content.textContent = index_history_db[index].detail[k].content
                    $history_of_the_year_detail_item.appendChild($history_of_the_year_detail_item_content)
                    $history_of_the_year_detail_list.appendChild($history_of_the_year_detail_item)
                }
            }

            $history_of_the_year.appendChild($history_of_the_year_detail_list)
        }
    }

    const showHistoryOfTheYear = () => {
        const $btn_history_by_year = getAll('.btn-history-by-year')
        for(let i = 0; i < $btn_history_by_year.length; i++) {
            $btn_history_by_year[i].addEventListener('click', ()=> {
                console.log($btn_history_by_year[i].textContent + 'clicked')
                for(let j = 0; j < $btn_history_by_year.length; j++) {
                    if(j !== i) {
                        $btn_history_by_year[j].classList.remove('true')
                    } else {
                        $btn_history_by_year[j].classList.add('true')
                    }
                }
                getHistoryOfTheYear(i)
            })
        }
    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', () => {
            getBtnHistoryByYear()
            getHistoryOfTheYear(0)
            showHistoryOfTheYear()
        })
    }

    init()
  })()
  