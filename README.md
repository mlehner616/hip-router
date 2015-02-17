Using docker and fig to set up hipache.

Make sure your server has [docker](https://www.docker.com/) and [fig](http://www.fig.sh/) installed.

```
$ git clone https://github.com/theverything/hip-router.git
$ cd hip-router
$ fig up
```

The `fig up` command will start the redis container and then the hipache container.

Once both have successfully started, follow the hipache documentation to set up your virtual hosts in redis.

