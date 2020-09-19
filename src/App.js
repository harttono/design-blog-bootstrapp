import React,{Component, Fragment} from 'react';

export default function App(){
    return (
        <Fragment>
            	<nav className="navbar navbar-expand-lg">
                <div className="container">
                  <a className="navbar-brand" href="#">Blog</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control border-0 rounded-0" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success btn-main my-sm-0 rounded-0" type="submit">Search</button>
                    </form>
                  </div>
                </div>
	            </nav>

              <section className="hero py-5 pt-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="hero-post shadow">
                        <img className="img-fluid  img-size-custom" alt="" src="img/img-jumbo.jpg"/>
                        <div className="hero-post-badges text-center">
                          <a href="#" className="p-2 px-3 mb-2"><i className="fa fa-calendar-o mr-2"></i>  15 march 2020</a>
                          <a href="#" className="p-2 px-3">Technology</a>
                        </div>
                        <div className="hero-post-content">
                          <div className="row">
                            <div className="col-md-3">
                              <img className="img-fluid rounded-circle" alt="" src="img/img1.jpg"/>
                            </div>
                            <div className="col-md-9">
                              <p>My Post Bla.....</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="hero-post shadow mb-3">
                        <img className="img-fluid" alt="" src="img/img-jumbo.jpg"/>
                        <div className="hero-post-badges text-center">
                          <a href="#" className="p-2 px-3 mb-2"><i className="fa fa-calendar-o mr-2"></i>  15 march 2020</a>
                          <a href="#" className="p-2 px-3">Technology</a>
                        </div>
                        <div className="hero-post-content">
                          <div className="row">
                            <div className="col-md-3">
                              <img className="img-fluid rounded-circle" alt="" src="img/img1.jpg"/>
                            </div>
                            <div className="col-md-9">
                              <p>My Post Bla.....</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hero-post shadow">
                        <img className="img-fluid" alt="" src="img/img-jumbo.jpg"/>
                        <div className="hero-post-badges text-center">
                          <a href="#" className="p-2 px-3 mb-2"><i className="fa fa-calendar-o mr-2"></i>  15 march 2020</a>
                          <a href="#" className="p-2 px-3">Technology</a>
                        </div>
                        <div className="hero-post-content">
                          <div className="row">
                            <div className="col-md-3">
                              <img className="img-fluid rounded-circle" alt="" src="img/img1.jpg"/>
                            </div>
                            <div className="col-md-9">
                              <p>My Post Bla.....</p>
                            </div>
                          </div>
                        </div>
                      </div>			
                    </div>
                  </div>
                </div>
              </section>
              <section className="blog-posts py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <article className="blog-post mb-3">
                        <div className="row">
                        <div className="col-sm-4">
                          <img src="img/img1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm-8">
                          <h3>My blog post title blaa</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus beatae veniam provident temporibus maiores perspiciatis sunt fugit dolores architecto.</p>
                          <div className="badge">
                            <a href="#">Technology</a>
                            <a href="#">Programming</a>
                          </div>
                        </div>
                        </div>
                      </article>
                      <article className="blog-post  mb-3">
                      <div className="row">
                        <div className="col-sm-4">
                          <img src="img/img1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm-8">
                          <h3>My blog post title blaa</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus beatae veniam provident temporibus maiores perspiciatis sunt fugit dolores architecto.</p>
                          <div className="badge">
                            <a href="#">Technology</a>
                            <a href="#">Programming</a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="blog-post  mb-3">
                      <div className="row">
                        <div className="col-sm-4">
                          <img src="img/img1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm-8">
                          <h3>My blog post title blaa</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus beatae veniam provident temporibus maiores perspiciatis sunt fugit dolores architecto.</p>
                          <div className="badge">
                            <a href="#">Technology</a>
                            <a href="#">Programming</a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="blog-post  mb-3">
                      <div className="row">
                        <div className="col-sm-4">
                          <img src="img/img1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-sm-8">
                          <p>My blog post title blaa</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus beatae veniam provident temporibus maiores perspiciatis sunt fugit dolores architecto.</p>
                          <div className="badge">
                            <a href="#">Technology</a>
                            <a href="#">Programming</a>
                          </div>
                        </div>
                      </div>
                    </article>
                    </div>
              
                    <aside className="col-md-4">
                      <div className="row social-link text-center">
                        <div className="col-sm-4 py-4 social-link">
                          <a className="w-100">
                            <i className="fa fa-facebook-official text-primary" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div className="col-sm-4 py-4 social-link ">
                        <a className="w-100 text-info">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="col-sm-4 py-4 social-link">
                        <a className="w-100 ">
                          <i className="fa fa-youtube text-danger" aria-hidden="true"></i>
                        </a>
                      </div>
                      </div>
                      <h4 className="aside-heading mt-4 pl-2 mb-3">Popular Artist</h4>
                      <article className="row author mb-3">
                        <div className="col-sm-4">
                          <img className="img-fluid rounded-circle shodow" alt="" src="img/img1.jpg"/>
                        </div>
                        <div className="col-sm-8">
                          <h5 className="m-0">Jhono Doe</h5>
                          <p className="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          <div className="author-social-link">
                            <i className="fa fa-facebook-official" aria-hidden="true" aria-hidden="false"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </div>
                        </div>
                      </article>
                      <article className="row author mb-3">
                        <div className="col-sm-4">
                          <img className="img-fluid rounded-circle shodow" alt="" src="img/img1.jpg"/>
                        </div>
                        <div className="col-sm-8">
                          <h5 className="m-0">Jhono Doe</h5>
                          <p className="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          <div className="author-social-link">
                            <i className="fa fa-facebook-official" aria-hidden="true" aria-hidden="false"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </div>
                        </div>
                      </article>
                      <article className="row author mb-3">
                        <div className="col-sm-4">
                          <img className="img-fluid rounded-circle shodow" alt="" src="img/img1.jpg"/>
                        </div>
                        <div className="col-sm-8">
                          <h5 className="m-0">Jhono Doe</h5>
                          <p className="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          <div className="author-social-link">
                            <i className="fa fa-facebook-official" aria-hidden="true" aria-hidden="false"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </div>
                        </div>
                      </article>
                      <article className="row author mb-3">
                        <div className="col-sm-4">
                          <img className="img-fluid rounded-circle shodow" alt="" src="img/img1.jpg"/>
                        </div>
                        <div className="col-sm-8">
                          <h5 className="m-0">Jhono Doe</h5>
                          <p className="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          <div className="author-social-link">
                            <i className="fa fa-facebook-official" aria-hidden="true" aria-hidden="false"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </div>
                        </div>
                      </article>
                      <h4 className="aside-heading mt-4 pl-2 mb-3">Popular Categories</h4>
                      <div className="badges w-100">
                          <a href="#">Technology</a>
                          <a href="#">Programming</a>
                          <a href="#">Blog Post Categories</a>
                          <a href="#">Some Stuff</a>
                          <a href="#">HTML Bootstrap</a>
                          <a href="#">React</a>
                      </div>
                    </aside>
                  </div>
                </div>
              </section>
              <footer className="footer py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                    <a className="footer-logo">Blogg</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus minima praesentium dolor sit amet, consectetur?</p>
                    </div>
                    <div className="col-md-4">
                    <h4>Usefull Links</h4>
                    <ul className="links">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Terms Of Service</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Newletters</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4>Newletters</h4>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn  my-2 my-sm-0 rounded-0" type="submit">Search</button>
                    </form>
                  </div>
                  </div>
                  <div className="credits text-center">
                    <p>Made By <a href="#">Harttonz Z.</a> &copy; 2020 All Rights Reserved.</p>
                  </div>
                </div>
            </footer>
        </Fragment>    
    )
  }