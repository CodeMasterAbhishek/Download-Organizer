chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
  let fileType = getFileType(item.filename);
  let targetFolder = getTargetFolder(fileType);
  let newFilename = targetFolder + "/" + item.filename;

  suggest({ filename: newFilename });
});

function getFileType(filename) {
  let extension = filename.split(".").pop().toLowerCase();
  if (
    [
      "bmp",
      "cr2",
      "cur",
      "dds",
      "dng",
      "erf",
      "exr",
      "fts",
      "gif",
      "hdr",
      "heic",
      "heif",
      "ico",
      "jfif",
      "jp2",
      "jpe",
      "jpeg",
      "jpg",
      "jps",
      "mng",
      "nef",
      "nrw",
      "orf",
      "pam",
      "pbm",
      "pcd",
      "pcx",
      "pef",
      "pes",
      "pfm",
      "pgm",
      "picon",
      "pict",
      "png",
      "pnm",
      "ppm",
      "psd",
      "raf",
      "ras",
      "rw2",
      "sfw",
      "sgi",
      "svg",
      "tga",
      "tiff",
      "wbmp",
      "webp",
      "wpg",
      "x3f",
      "xbm",
      "xcf",
      "xpm",
      "xwd",
    ].includes(extension)
  ) {
    return "photo";
  } else if (
    [
      "mp4",
      "avi",
      "mkv",
      "mov",
      "wmv",
      "flv",
      "mpeg",
      "mpg",
      "m4v",
      "3gp",
      "3g2",
      "asf",
      "swf",
      "f4v",
      "webm",
      "vob",
      "ogv",
      "mts",
      "m2ts",
      "ts",
      "mxf",
      "divx",
      "xvid",
      "rm",
      "rmvb",
    ].includes(extension)
  ) {
    return "video";
  } else if (
    [
      "8svx",
      "aac",
      "ac3",
      "aiff",
      "amb",
      "au",
      "avr",
      "caf",
      "cdda",
      "cvs",
      "cvsd",
      "cvu",
      "dts",
      "dvms",
      "fap",
      "flac",
      "fssd",
      "gsrt",
      "hcom",
      "htk",
      "ima",
      "ircam",
      "m4a",
      "m4r",
      "maud",
      "mp2",
      "mp3",
      "nist",
      "oga",
      "ogg",
      "opus",
      "paf",
      "prc",
      "pvf",
      "ra",
      "sd2",
      "sln",
      "smp",
      "snd",
      "sndr",
      "sndt",
      "sou",
      "sph",
      "spx",
      "tta",
      "txw",
      "vms",
      "voc",
      "vox",
      "w64",
      "wav",
      "wma",
      "wv",
    ].includes(extension)
  ) {
    return "audio";
  } else if (["zip", "iso", "rar", "7z", "tar", "gz"].includes(extension)) {
    return "archive";
  } else if (["exe"].includes(extension)) {
    return "executable";
  } else if (
    [
      "csv",
      "djvu",
      "doc",
      "docx",
      "odp",
      "ods",
      "odt",
      "ott",
      "pdf",
      "ppt",
      "rtf",
      "txt",
      "xls",
      "xlsx",
    ].includes(extension)
  ) {
    return "documents";
  } else if (
    ["azw3", "epub", "fb2", "lrf", "mobi", "pdb", "snb"].includes(extension)
  ) {
    return "ebook";
  } else if (
    [
      "bat",
      "c",
      "class",
      "cpp",
      "cs",
      "css",
      "go",
      "h",
      "htaccess",
      "html",
      "java",
      "js",
      "json",
      "kml",
      "php",
      "pl",
      "py",
      "rb",
      "sh",
      "sql",
      "swift",
      "vb",
      "yaml",
    ].includes(extension)
  ) {
    return "code";
  } else if (
    ["bin", "cff", "dfont", "otf", "pfb", "ps", "sfd", "ttf", "woff"].includes(
      extension
    )
  ) {
    return "fonts";
  } else {
    return "other";
  }
}

function getTargetFolder(fileType) {
  switch (fileType) {
    case "photo":
      return "Photos";
    case "video":
      return "Videos";
    case "audio":
      return "Audio";
    case "archive":
      return "Archives";
    case "executable":
      return "Executables";
    case "documents":
      return "Documents";
    case "ebook":
      return "Ebooks";
    case "code":
      return "Code";
    case "fonts":
      return "Fonts";
    default:
      return "Others";
  }
}
