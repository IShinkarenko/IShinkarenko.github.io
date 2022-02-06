window.addEventListener("DOMContentLoaded",  () => {
  const submitSearchBtn = document.getElementById("search-submit")
  const searchInput = document.getElementById("site-search")
  const PUBLIC_KEY = `
        -----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDwG7fy2mWBYRFd/9jTGcXllSH
        NpxOQIh3m7b54COKY55MsIxJ52/0R291yp/3xdQam9CqkLASooAA65ghjg7Suafe
        QGv8hd/lfQZvndz5rSB4Y1q5C+iPio0MwrlH4ftZo+KEMFUclL8wSEHHmQrqWu1g
        dtAX2LfKFi7JaR0h5QIDAQAB
        -----END PUBLIC KEY-----
        `

  submitSearchBtn.addEventListener("click", handleRedirectToExpandigoSearch)


  function handleRedirectToExpandigoSearch() {
    const searchValue = searchInput.value
    const encryptedSearchValue = encryptSearchValue(searchValue)
    const url = `http://localhost:3000/search-results/?q=${encryptedSearchValue}`

    window.open(url, '_blank');
  }

  function encryptSearchValue(searchValue) {
    const jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(PUBLIC_KEY);

    return jsEncrypt.encrypt(searchValue);
  }
})
