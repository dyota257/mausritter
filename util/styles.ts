// TYPESCRIPT DONE

export {figure,good,em,bad}

// for player inputs
function figure(text: string):string {return `<span class="nes-text is-primary">${text}</span>`}

// for healing numbers
function good(text: string):string {return `<span class="nes-text is-success">${text}</span>`}

// for everything else variable
function em(text: string):string {return `<span class="nes-text is-warning">${text}</span>`}

// for damage numbers
function bad(text: string):string {return `<span class="nes-text is-error">${text}</span>`}