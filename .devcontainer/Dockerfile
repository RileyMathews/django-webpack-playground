FROM python:3.7

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app
ENV PYTHONPATH=/python
ENV PATH=/python/bin:$PATH

ENTRYPOINT [""]

CMD ["bash"]