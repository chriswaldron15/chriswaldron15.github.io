$(() => {
    let dateNow = new Date();
    let firstEmployedDate = new Date(2012, 9, 0);
    let startDate = new Date(2021, 0, 3);   // started at Ndemic Creations, continuously employed since
    let dateDiff = new Date(dateNow - startDate);
    
    let additionalYears = 3;    // 2 and a bit at Red7Mobile, 8 months at Raredrop Games
    let generalYears = 6;        // 2 at CGI, just under 4 at OVO energy
    
    $("#tagline")[0].innerText = `Lead/ senior games programmer with over ${dateDiff.getFullYear() - 1970 + additionalYears} years professional game development experience and over ${dateDiff.getFullYear() - 1970 + additionalYears + generalYears} years as a software engineer.`;
    $("#employed_length")[0].innerText = new Date(dateNow - firstEmployedDate).getFullYear() - 1970;
})
