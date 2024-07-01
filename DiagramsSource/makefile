ALLOUTPUTS = \
	erediensten-toezichtsdatabank-sparql.svg
OUTPUTFOLDER = ../public/assets/diagrams/
FORMAT = svg

all: $(ALLOUTPUTS)

%.$(FORMAT): %.dot
	sed "s/\s*/ /" $^ > $^.inter
	dot $^.inter -T$(FORMAT) -o $(OUTPUTFOLDER)$@
	rm $^.inter

clean:
	rm $(OUTPUTFOLDER)*.$(FORMAT)
