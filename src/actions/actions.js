import getDataApi from '../API/getDataAPI'

export function getData(page = 1) {
  return async (dispatch) => {
    let responseJson = await getDataApi(page);
    var dt = [];
    responseJson.map((item, id) => {
      let i = Math.floor(id / 2);
      if (!dt[i]) { dt[i] = [] }
      dt[i].push({
        id: item.id,
        images: item.images.teaser,
        imagesNormal: item.images.hidpi,
        title: item.title,
        avatar: item.user.avatar_url,
        username: item.user.name
      })
    });
    // alert("data: " + JSON.stringify(dt));
    return dispatch({
      type: "LOADMORE",
      data: dt
    });
  }
}