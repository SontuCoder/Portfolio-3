
const Contact = () => {

    const social = [
        {
            link:"www.google.com",
            pic:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 16 16" fill="var(--st)"><path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path></svg>,
        },
        {
            link:"www.google.com",
            pic:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="var(--st)"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>,
        },
        {
            link:"www.google.com",
            pic:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="var(--bg)" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/><path fill="var(--st)" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>,
        },
        {
            link:"www.google.com",
            pic:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 50 50" fill="var(--st)" >
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>,
        },
    ]

    return (
        <section id="contact" className=" max-w-[var(--width)] w-full flex flex-col items-center text-[var(--pt)] mf">
            <h5 className=" text-center heading mt-12 ">Contact Me</h5>
            <div className="contact-lower flex w-full md:flex-row flex-col justify-evenly">

                <div className="bg-amber- w-full md:w-[45%] my-10">
                    <input type="text" className="bg-[var(--bbg)] rounded-md w-full h-13 md:h-16 mb-4 !text-slate-900 text-2xl px-4 outline-none focus:border-3 focus:border-[var(--st)]" placeholder="Name"/>

                    <input type="text" className="bg-[var(--bbg)] rounded-md w-full  h-13 md:h-16 mb-4 !text-slate-900 text-2xl px-4 outline-none focus:border-3 focus:border-[var(--st)]" placeholder="Email"/>

                    <textarea name="" placeholder="Message" id="" className="bg-[var(--bbg)] rounded-md w-full h-50 !text-slate-900 text-2xl px-4 pt-4 outline-none focus:border-3 focus:border-[var(--st)]"></textarea>

                    <input type="submit" value="Submit" className="v-shadow rounded-md w-full  h-13 md:h-16 mb-4 text-[var(--st)] text-2xl px-4 mt-4 cursor-pointer" />

                    <div className="socials mt-5 flex justify-evenly">
                        {social.map(({link, pic}, index)=>(
                            <div className=" h-15 w-15 rounded v-shadow p-2" key={index}>
                                <a href={link} className="w-full h-full">{pic}</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-[45%] w-full my-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5460.797782047923!2d77.33178444134992!3d28.56180933740116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ca9107c6ff%3A0xa4b1026da2638adc!2sBotanical%20Garden!5e0!3m2!1sen!2sin!4v1742055359933!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mx-auto w-[90%] h-full rounded-lg v-shadow "></iframe>
                </div>

            </div>
        </section>
    )
}

export default Contact;