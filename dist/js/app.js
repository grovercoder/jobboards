
function show_all_boards() {
    const boards = document.querySelectorAll('.board_list .hide')
    boards.forEach(item => {
        item.classList.remove('hide')
    })
}

function apply_filter(evt) {
    const filter_text = evt.target.value.trim().toLowerCase()
    show_all_boards()
    
    if (filter_text) {
        const boards = document.querySelectorAll('.board_list .jobboard')

        boards.forEach(item => {
            const anchor = item.querySelector('a')
            const market = item.querySelector('.market')
            const txt = []
            if (anchor) {
                txt.push(anchor.textContent.trim().toLowerCase())
            }
            if (market) {
                txt.push(market.textContent.trim().toLowerCase())
            }
    
            const src_text = txt.join(' ')
            const contains_filter = (src_text.indexOf(filter_text) !== -1)

            if (!contains_filter) {
                item.classList.add('hide')
            }    
        })
    }
}

document.addEventListener("DOMContentLoaded", evt => {
    const filter_box = document.getElementById('inputFilter')
    filter_box.addEventListener('keyup', apply_filter)
})