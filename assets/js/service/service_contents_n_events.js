;(function () {
    'use strict'

    const get = (target) => {
        return document.querySelector(target)
    }
        
    const getAll = (target) => {
        return document.querySelectorAll(target)
    }

    const MaxScrollSize = 2595

    const $contents_n_events_wrapper = get('.contents-n-events-wrapper')
    const $btn_contents_n_events_left = get('.btn-contents-n-events-left')
    const $btn_contents_n_events_right = get('.btn-contents-n-events-right')

    const slideMoveRight = (e) => {
        e.preventDefault()
        if($contents_n_events_wrapper.scrollLeft === MaxScrollSize) {
            return
        } else if (MaxScrollSize - $contents_n_events_wrapper.scrollLeft <= screen.width) {
            $contents_n_events_wrapper.scroll({
                behavior: 'smooth',
                left: MaxScrollSize
            })
        } else {
            $contents_n_events_wrapper.scroll({
                behavior: 'smooth',
                left: $contents_n_events_wrapper.scrollLeft + window.innerWidth
            })
        }
    }

    const slideMoveLeft = (e) => {
        e.preventDefault()
        if($contents_n_events_wrapper.scrollLeft === 0) {
            return
        } else if ($contents_n_events_wrapper.scrollLeft <= screen.width) {
            $contents_n_events_wrapper.scroll({
                behavior: 'smooth',
                left: 0
            })
        } else {
            $contents_n_events_wrapper.scroll({
                behavior: 'smooth',
                left: $contents_n_events_wrapper.scrollLeft - window.innerWidth
            })
        }
    }

    const init = () => {
        $btn_contents_n_events_left.addEventListener('click', slideMoveLeft)
        $btn_contents_n_events_right.addEventListener('click', slideMoveRight)
    }

    init()
}) ()