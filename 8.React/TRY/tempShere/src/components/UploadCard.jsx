import { useState, useCallback } from "react";
import { Upload, File, X, Image, Video, FileText, CheckCircle, Loader2 } from "lucide-react";
import ExpiryDropdown from "./ExpiryDropdown.jsx";

const UploadCard = () => {
  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("");
  const [expiryDays, setExpiryDays] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) return <Image className="w-4 h-4 text-purple" />;
    if (file.type.startsWith("video/")) return <Video className="w-4 h-4 text-purple" />;
    if (file.type === "application/pdf") return <FileText className="w-4 h-4 text-purple" />;
    return <File className="w-4 h-4 text-purple" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const simulateUpload = () => {
    if (files.length === 0) return;
    
    setUploadState("uploading");
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("complete");
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);
  };

  const resetUpload = () => {
    setFiles([]);
    setFilename("");
    setUploadState("idle");
    setUploadProgress(0);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-card rounded-2xl shadow-soft p-6 sm:p-8">
        {uploadState === "idle" && (
          <>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                isDragging
                  ? "border-purple bg-purple/5"
                  : "border-border hover:border-purple/50 hover:bg-sky/10"
              }`}
            >
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*,video/*,.pdf,.doc,.docx"
              />
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-sky/50 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Drop files here or click to upload</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Photos, videos, PDFs, documents
                  </p>
                </div>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2 animate-fade-in">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-sky/20 rounded-lg"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {getFileIcon(file)}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-sky/50 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Expiry time
                </label>
                <ExpiryDropdown value={expiryDays} onChange={setExpiryDays} />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Custom filename (optional)
                </label>
                <input
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="Enter a custom name..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple/50 transition-all duration-200"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={simulateUpload}
                  disabled={files.length === 0}
                  className="px-6 py-3 gradient-primary text-white font-medium rounded-lg shadow-soft hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-soft"
                >
                  Upload Files
                </button>
              </div>
            </div>
          </>
        )}

        {uploadState === "uploading" && (
          <div className="py-8 animate-fade-in">
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-sky/50"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="url(#progressGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={226}
                    strokeDashoffset={226 - (226 * uploadProgress) / 100}
                    className="transition-all duration-200"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(213, 29%, 26%)" />
                      <stop offset="100%" stopColor="hsl(263, 79%, 43%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    {Math.round(uploadProgress)}%
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-foreground font-medium flex items-center gap-2 justify-center">
                  <Loader2 className="w-4 h-4 animate-spin text-purple" />
                  Uploading {files.length} file{files.length > 1 ? "s" : ""}...
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Please wait while we securely upload your files
                </p>
              </div>

              <div className="w-full max-w-xs">
                <div className="h-2 bg-sky/30 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {uploadState === "complete" && (
          <div className="py-8 animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-center">
                <p className="text-foreground font-semibold text-lg">Upload Complete!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your files will expire in {expiryDays} day{expiryDays > 1 ? "s" : ""}
                </p>
              </div>

              <div className="w-full mt-4 p-3 bg-sky/20 rounded-lg flex items-center gap-3">
                <input
                  type="text"
                  readOnly
                  value="https://tempshare.app/s/abc123xyz"
                  className="flex-1 bg-transparent text-sm text-foreground outline-none"
                />
                <button className="px-4 py-2 gradient-primary text-white text-sm font-medium rounded-lg hover:shadow-soft transition-all">
                  Copy
                </button>
              </div>

              <button
                onClick={resetUpload}
                className="mt-4 text-sm text-purple hover:text-purple/80 font-medium transition-colors"
              >
                Upload more files
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCard;
