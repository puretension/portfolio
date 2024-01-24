// tailwind.config.js를 postcss.config.js로 변경하고 아래와 같이 수정
module.exports =  {
    plugins: {
        tailwindcss: { config: './tailwind.config.js'},
    }
}