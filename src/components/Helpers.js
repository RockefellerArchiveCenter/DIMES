import queryString from "query-string";


export const dateString = dates => {
  return dates && typeof(dates) === "string" ? dates : dates && dates.map(d => d.expression).join(", ")
}


/** Boolean indicator for the presence of access and use notes */
export const hasAccessOrUse = notes => {
  const access = notes && notes.filter(n => {return n.type === "accessrestrict"}).length
  const use = notes && notes.filter(n => {return n.type === "userestrict"}).length
  return access || use
}


/** Returns text for a specific note by type */
export const noteText = (notes, noteType) => {
  let note = notes && notes.filter(n => {return n.type === noteType})[0]
  return note ? note.subnotes.map(s => s.content).join("\r\n") : null
}


/** Adds params (passed as an object) to a URL */
export const appendParams = (url, params) => {
  return `${url}?${queryString.stringify(params)}`
}


/** Returns a date formatted as mm/dd/yyyy */
export const getFormattedDate = date => {
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}


/** Returns a human readable representation of bytes */
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
