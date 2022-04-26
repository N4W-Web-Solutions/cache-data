'user strict';
class Cache {
    constructor (o) {
        this.records = []
        this.minutesToExpires = o.minToCache || 5
    }
    model (obj) {
        return {
            key: obj.key,
            value: obj.value,
            expires: new Date(new Date().getTime() + (60000 * this.minutesToExpires)).getTime()
        }
    }
    exists (key) {
        const record = this.records.find(record => record.key === key)
        return (record) ? true : false
    }
    isExpired (key) {
        const record = this.records.find(record => record.key === key)
        return (record) ? ((record.expires < new Date().getTime()) ? true : false) : false
    }
    get (key) {
        return this.records.find(record => record.key === key)
    }
    insert (key, value) {
        this.records.push(this.model({key, value}))
    }
    remove (key) {
        const i = this.records.findIndex(v => v.key === key)
        this.records.splice(i, i >= 0 ? 1 : 0)
    }
}

module.exports = Cache;
