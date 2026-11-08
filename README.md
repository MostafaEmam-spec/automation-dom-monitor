# Dataset Annotation & Validation Toolkit

A command-line interface (CLI) tool designed for batch auditing audio datasets, verifying sample rates, detecting clipping artifacts, and aligning JSON metadata transcripts with raw WAV assets for LLM speech-to-speech training benchmarks.
​Architecture
​[Raw Audio Assets] ---> [Validator Engine] ---> [Artifact Report (JSON)]
​Installation
​git clone https://github.com/MostafaEmam-spec/dataset-annotation-toolkit.git
cd dataset-annotation-toolkit
pip install -r requirements.txt
