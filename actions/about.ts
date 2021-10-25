export {about};
import {em} from '../util/styles'

function about() {
    return `
        <h3><span class="nes-text is-primary">What this is</span></h3>
        
        <p>This is a tool for game-masters, and game players alike for the table-top role-playing game <a href='https://losing-games.itch.io/mausritter'>Mausritter</a>, by <a href='https://losing-games.itch.io/'>Losing Games</a>.</p>
        <p>This tool will ${em('roll dice and read tables')} for you. ${em('It does not replace the game.')} It doesn't remember anything, so you still need pen, paper, and your human memory and imagination to actually play. </p>
        
        <h3><span class="nes-text is-primary">What is it called again?</span></h3>
        <p>Mausknecht means "mouse servant", and is a pun on the German surname Hausknecht.</p>

        <h3><span class="nes-text is-primary">Credits</span></h3>
        <p>Retro-style theme by <a href="https://nostalgic-css.github.io">NES.css</a></p>
    `
}