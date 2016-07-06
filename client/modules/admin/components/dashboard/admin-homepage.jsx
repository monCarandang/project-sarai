import React from 'react';

class AdminHomepage extends React.Component {
  constructor() {
    super()
    this.handleUpload = this.handleUpload.bind(this)
    this.startUpload = this.startUpload.bind(this)
    this.$ = $
    find = find.bind(this)
    this.find = find.bind(this)
  }
  componentWillMount() {
    Uploader.init(this)
  }
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    Uploader.render.call(this)
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  startUpload(event) {
    // console.log(event.target)
    console.log('starting upload...')
    Uploader.startUpload.call()
  }

  handleUpload(event) {
    // this.props.callback()
    console.log('handling upload...')
    if (this.formData) {
      this.formData['contentType'] = this.contentType
    }

    else {
      this.formData = {contentType: this.contentType}
    }

    const r = typeof this.formData == 'string' ? this.formData : JSON.stringify(this.formData)
    console.log(r)
    return r
  }

  render() {
    return (
      <div>
        Homepage options go here
        <form method="POST" encType="multipart/form-data" >
          <input type="file" className="jqUploadclass" data-form-data={this.handleUpload} />

          <button className="start" onClick={this.startUpload}>StartUpload</button>
        </form>
      </div>
    );
  }
}

export default AdminHomepage;
