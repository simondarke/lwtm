

async function grabData() {
    const url = "http://10.10.41.237/lwt-simple-api/index.php";
    const response = await fetch(url, {});
    const json = await response.json();

    return json;
}
