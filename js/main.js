function openclose() {
    let status = $('#post-box').css('display');
    if (status == 'block') {
        $('#post-box').hide()
        $('#posting-box-btn').text('일기 작성')
    } else {
        $('#post-box').show()
        $('#posting-box-btn').text('일기 작성')
    }
}
