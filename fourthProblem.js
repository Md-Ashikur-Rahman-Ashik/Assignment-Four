function password(obj){
    if(!obj.name || !obj.birthYear || !obj.siteName){
        return "invalid";
    }

    const year = obj["birthYear"];
    if(year < 1000){
        return "invalid";
    }

    const website = obj["siteName"];
    const modifyFirst = website.charAt(0);
    const finalWord = modifyFirst.toUpperCase() + website.slice(1);

    const createdPass = finalWord + "#" + obj["name"] + "@" + obj["birthYear"];
    return createdPass;
}