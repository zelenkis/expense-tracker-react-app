function generateKey() {
    const random = Math.random().toString().slice(2, 18);
    const ids = [random.slice(0, 4), random.slice(4, 8), random.slice(8, 12), random.slice(12)];

    return ids[0].concat('-', [ids[1], ids[2], ids[3]]).replaceAll(',', '-');
}

export default generateKey;