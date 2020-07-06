// eslint-disable-next-line no-undef
db.createUser(
  {
    user    :   'admin',
    pwd     :   'admin',
    roles   : [
      {
        role:  "readWrite",
        db  :  "react-whfang-spider"
      }
    ]
  }
)
