class Dom {
  constructor() {}

  static drawSongCards(songsArr) {
    songsArr.forEach((song) => {
      let cardHtml= ``;
    })

  }
  static createRedditCard(obg) {
  return `
	  <div class="card">
	  <div class="card-image">
	    <img src="img/osx-el-capitan.jpg" class="img-responsive">
	  </div>
	  <div class="card-header">
	    <div class="card-title h5">...</div>
	    <div class="card-subtitle text-gray">...</div>
	  </div>
	  <div class="card-body">
	    ...
	  </div>
	  <div class="card-footer">
	    <button class="btn btn-primary">...</button>
	  </div>
	</div>
  `
  }
}