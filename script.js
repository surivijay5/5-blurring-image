const img = document.querySelector('.bg-image')
const loadingText = document.querySelector('.loading-text')

let load = 0

let inint = setInterval(blur, 30);

function blur(){
    load++;
    if(load > 99){
        clearInterval(inint)
    }

    loadingText.innerHTML = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)

    img.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(input, input_start, input_end, output_start,output_end){
    return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
}