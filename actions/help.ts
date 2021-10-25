export {help}

function help():string {
    let output:string = `
        <div style="background-color:#212529; padding: 1rem 0;">
            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
                <span>Yes</span>
            </label>
        
            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" />
                <span>No</span>
            </label>
        </div>
    `
    return output
}