import '../../App.css';


function accessible(e, index, things, linkRefs) {
    // Arrow down or right moves focus to next link
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    const nextIndex = (index + 1) % things.length;
    linkRefs.current[nextIndex].focus();
    }
    // Arrow up or left moves focus to previous link
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    const prevIndex = (index - 1 + things.length) % things.length;
    linkRefs.current[prevIndex].focus();
    }
}

export default accessible;