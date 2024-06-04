// Animation Loading

let animation = bodymovin.loadAnimation({
    container: document.getElementById('animation'),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/baf782bd-839c-4bda-b2f3-a9125b6cf8f4/RhFSstZVFq.json'
    // https://lottie.host/007d46aa-7317-4d31-a9a0-5c0da19a4686/kN2ifwWCUu.json
})

function redirect(){
    document.location.href="Wall.html";
}

setTimeout(redirect, 4500)
