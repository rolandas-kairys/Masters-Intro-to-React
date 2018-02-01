// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare var show: {
  poster: string,
  title: string,
  year: string,
  description: string,
  imdbID: string
};