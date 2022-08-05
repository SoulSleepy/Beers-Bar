export default function lengthDes140(des: string): string {
    if (des.length <= 140) return des
    return des.slice(0,140) + '...'
}