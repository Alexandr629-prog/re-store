export function createPages(pages, countPages, currentPage) {
    if(countPages > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-4; i <= currentPage+5; i++) {
                pages.push(i)
                if(i == countPages) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i == countPages) break
            }
        }
    }  else {
        for (let i = 1; i <= countPages; i++) {
            pages.push(i)
        }
    }
}